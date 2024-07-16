// chat_image.tsx
'use client';
import { ChangeEvent, useState, useRef, useEffect, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
// import CopyToClipboard from '@/components/copy-to-clipboard';
import FeedbackModal from './FeedbackModal'; // QR Code for WhatsApp

function formatMessageContent(content) {
    return content.split('**').map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
}

export default function ImageAnalysisBot() {
    const ref = useRef<HTMLDivElement>(null);
    const [image, setImage] = useState<string>('');
    const [openAIResponse, setOpenAIResponse] = useState<string>('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (ref.current === null) return;
        ref.current.scrollTo(0, ref.current.scrollHeight);
    }, [openAIResponse]);

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (!files || files.length === 0) {
            window.alert('Kein Bild ausgewählt. Bitte Bilddatei (png, jpg, jpeg) auswählen.');
            return;
        }

        const file = files[0];
        if (!file.type.match('image.*')) {
            window.alert('Ungültige Datei. Bitte Bilddatei (png, jpg, jpeg) auswählen.');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setImage(reader.result);
            }
        };

        reader.onerror = (error) => {
            console.error('Error reading file: ', error);
        };
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (image === '') {
            alert('Bild hochladen.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: image }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Network response was not ok: ${response.statusText}, ${errorText}`);
            }

            const result = await response.json();
            const content = result.choices?.[0]?.message?.content || 'No content found';
            setOpenAIResponse(content);
        } catch (error) {
            console.error('Error submitting the form: ', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className='py-1 text-zinc-700 dark:text-zinc-300'>
            <div className='container'>

                <div className='mt-3 w-full max-w-full text-left relative -ml-4'>
                    <h1 className='font-medium pt-5 text-zinc-900 dark:text-zinc-100'>Beta Test: Bild Analyse</h1>
                </div>

                <div className='flex'>
                    <div className='mt-3 w-3/4 text-left relative -ml-4'>
                        {/* <div className='absolute top-0 right-0 -mt-10 ml-2'>
                            <CopyToClipboard message={openAIResponse} className='' />
                        </div> */}

                        <div
                            className='mb-2 h-[500px] rounded-md border dark:border-zinc-700 overflow-auto text-left bg-white dark:bg-zinc-900'
                            ref={ref}
                        >
                            <div className='p-4'>
                                <h2 className='text-xl font-bold mb-4'>Bild hochladen</h2>
                                {image ? (
                                    <div className='mb-4 overflow-hidden'>
                                        <img src={image} className='w-full object-contain max-h-72' alt='Uploaded' />
                                    </div>
                                ) : (
                                    <div className='mb-4 p-8 text-center'>
                                        <p>Bild wird hier angezeigt werden</p>
                                    </div>
                                )}

                                {loading && (
                                    <div className='flex items-center justify-center mb-4'>
                                        <svg
                                            className='animate-spin h-5 w-5 mr-3 text-zinc-700 dark:text-zinc-300'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                        >
                                            <circle
                                                className='opacity-25'
                                                cx='12'
                                                cy='12'
                                                r='10'
                                                stroke='currentColor'
                                                strokeWidth='4'
                                            ></circle>
                                            <path
                                                className='opacity-75'
                                                fill='currentColor'
                                                d='M4 12a8 8 0 018-8v8H4z'
                                            ></path>
                                        </svg>
                                        <p>Das Bild wird analysiert...</p>
                                    </div>
                                )}

                                {openAIResponse && (
                                    <div className='border-t border-gray-300 pt-4'>
                                        <h2 className='text-xl font-bold mb-2'>Doc Dialog Antwort:</h2>
                                        <p>{openAIResponse}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className='relative'>
                            <Input
                                name='message'
                                type='file'
                                onChange={handleFileChange}
                                className='pr-12 placeholder:italic placeholder:text-zinc-600/75 focus-visible:ring-zinc-500 text-left dark:bg-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-500 dark:focus-visible:ring-zinc-400'
                            />
                            <button
                                type='submit'
                                className='absolute right-1 top-1 h-8 w-30 bg-emerald-500 text-white rounded flex items-center justify-center'
                            >
                                Enter
                            </button>
                        </form>
                    </div>

                    {/* Legend Section */}
                    <div className='mt-1 w-1/4 text-left relative pl-5'>
                        <div className='mt-2 bg-gray-100 dark:bg-gray-800 pl-13 rounded-md max-h-[500px] overflow-y-auto'>
                            <p className='p-1 font-semibold text-zinc-900 dark:text-zinc-100'>Beispiele (klickbar):</p>
                            <ul className='p-1 mt-1 text-sm text-zinc-700 dark:text-zinc-300'>
                                <li>Was siehst du auf dem Bild?</li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <button
                                className='h-8 max-w-full bg-gray-600 text-white rounded flex items-center justify-center pl-8 pr-8'
                                onClick={() => setShowModal(true)}
                            >
                                Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <FeedbackModal showModal={showModal} setShowModal={setShowModal} />
        </section>
    );
}

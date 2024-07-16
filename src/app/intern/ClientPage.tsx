'use client';

import { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { ChevronDownIcon, DocumentTextIcon, CalculatorIcon, BookOpenIcon, BeakerIcon, BriefcaseIcon, GlobeAltIcon, DocumentIcon, PencilIcon } from '@heroicons/react/24/solid';
import Chat_diagnose from '@/components/AI/chat_diagnose';
import Chat_kostengutsprache from '@/components/AI/chat_kostengutsprache';
import Chat_stellungsnahme from '@/components/AI/chat_stellungsnahme';
import Chat_documente from '@/components/AI/chat_dokumente';
import Chat_labor from '@/components/AI/chat_labor';
import Chat_literatur from '@/components/AI/chat_literatur';
import Chat_medis from '@/components/AI/chat_medis';
import Chat_summary from '@/components/AI/chat_summary';
import Chat_calculator from '@/components/AI/chat_calculator';
import Chat_plaene from '@/components/AI/chat_plaene';
import Chat_news from '@/components/AI/chat_news';
import Chat_freitext from '@/components/AI/chat_freitext';
import Chat_reise from '@/components/AI/chat_reise';
import Chat_pdf from '@/components/AI/chat_pdf';
import Chat_image from '@/components/AI/chat_image';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ClientPage() {
  const [activeComponent, setActiveComponent] = useState('diagnose');

  let ActiveComponent;
  switch (activeComponent) {
    case 'diagnose':
      ActiveComponent = Chat_diagnose;
      break;
    case 'kostengutsprache':
      ActiveComponent = Chat_kostengutsprache;
      break;
    case 'stellungsnahme':
      ActiveComponent = Chat_stellungsnahme;
      break;
    case 'documents':
      ActiveComponent = Chat_documente;
      break;
    case 'labor':
      ActiveComponent = Chat_labor;
      break;
    case 'literatur':
      ActiveComponent = Chat_literatur;
      break;
    case 'medis':
      ActiveComponent = Chat_medis;
      break;
    case 'summary':
      ActiveComponent = Chat_summary;
      break;
    case 'calculator':
      ActiveComponent = Chat_calculator;
      break;
    case 'plaene':
      ActiveComponent = Chat_plaene;
      break;
    case 'news':
      ActiveComponent = Chat_news;
      break;
    case 'freitext':
      ActiveComponent = Chat_freitext;
      break;
    case 'reise':
      ActiveComponent = Chat_reise;
      break;
    case 'pdf':
      ActiveComponent = Chat_pdf;
      break;
    case 'image':
      ActiveComponent = Chat_image;
      break;
    default:
      ActiveComponent = null;
  }

  const getButtonClass = (component) => {
    return activeComponent === component ? 'bg-gray-500 text-white' : 'bg-gray-400 text-white hover:bg-amber-500';
  };

  return (
    <>
      <section className="pb-3">
        <div className="container mx-auto px-4">
          <div className="mt-4 flex flex-wrap justify-between gap-2">

            <button onClick={() => setActiveComponent('diagnose')} className={`px-4 py-2 rounded ${getButtonClass('diagnose')}`} style={{ flex: '1 1 20%' }}>
              Diagnose
            </button>

            <button onClick={() => setActiveComponent('kostengutsprache')} className={`px-4 py-2 rounded ${getButtonClass('kostengutsprache')}`} style={{ flex: '1 1 20%' }}>
              Gutsprache
            </button>

            <button onClick={() => setActiveComponent('medis')} className={`px-4 py-2 rounded ${getButtonClass('medis')}`} style={{ flex: '1 1 20%' }}>
              Medis
            </button>

            <button onClick={() => setActiveComponent('labor')} className={`px-4 py-2 rounded ${getButtonClass('labor')}`} style={{ flex: '1 1 20%' }}>
              Labor
            </button>

            <Menu as="div" className="relative inline-block text-left" style={{ flex: '1 1 20%' }}>
              <div>
                <MenuButton className="inline-flex items-center px-4 py-2 text-white bg-gray-400 rounded hover:bg-amber-500 w-full">
                  ⚕️ Tools
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-200" aria-hidden="true" />
                </MenuButton>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('stellungsnahme')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <DocumentTextIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Stellungsnahme
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('labor')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <BeakerIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Labor
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('literatur')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <BookOpenIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Literatur
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('medis')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <BriefcaseIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Medikamente
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('calculator')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <CalculatorIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Rechner
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('reise')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <GlobeAltIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Reiseberatung
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left" style={{ flex: '1 1 20%' }}>
              <div>
                <MenuButton className="inline-flex items-center px-4 py-2 text-white bg-gray-400 rounded hover:bg-amber-500 w-full">
                  Zusammenfassungen
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-200" aria-hidden="true" />
                </MenuButton>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('documents')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <DocumentIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Texte
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('pdf')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <DocumentIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          PDF (via URL)
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('image')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <DocumentIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Bild (Upload)
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left" style={{ flex: '1 1 20%' }}>
              <div>
                <MenuButton className="inline-flex items-center px-4 py-2 text-white bg-gray-400 rounded hover:bg-amber-500 w-full">
                  Freitext
                  <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-200" aria-hidden="true" />
                </MenuButton>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('freitext')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          zur Eingabe
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('freitext')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Hilfe
                        </a>
                      )}
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => setActiveComponent('freitext')}
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                        >
                          <PencilIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                          Funktionen im Entwicklung
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container mx-auto px-4">
          <div className="text-left">
            <h2 className="pl-1 text-2xl font-bold text-black dark:text-white">
              {activeComponent === 'diagnose' && 'Differentialsdiagnosen Copilot'}
              {activeComponent === 'kostengutsprache' && 'Kostengutsprache Copilot'}
              {activeComponent === 'stellungsnahme' && 'Stellungsnahme Copilot'}
              {activeComponent === 'labor' && 'Laborwerte Copilot'}
              {activeComponent === 'documents' && 'Dokumente Copilot'}
              {activeComponent === 'literatur' && 'Literatur Copilot'}
              {activeComponent === 'medis' && 'Medikamente Copilot'}
              {activeComponent === 'summary' && 'Zusammenfassungs Copilot'}
              {activeComponent === 'calculator' && 'Rechner Copilot'}
              {activeComponent === 'plaene' && 'Pläne Copilot'}
              {activeComponent === 'news' && 'News Copilot'}
              {activeComponent === 'freitext' && 'Freitext Copilot'}
              {activeComponent === 'pdf' && 'PDF'}
              {activeComponent === 'reise' && 'Reise'}
            </h2>
            {ActiveComponent && <ActiveComponent />}
            <p className="text-center text-gray-500 text-sm pt-2">
              Testversion - der Copilot kann Fehler machen. Bitte alle Angaben im Detail kontrollieren und nicht blind kopieren.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

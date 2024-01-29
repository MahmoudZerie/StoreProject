import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'

interface IProps{
	isOpen:boolean
	closeModal:()=>void
	title?:string
	children?:ReactNode
  description?:string
}

const Modal=({isOpen,closeModal,title,children,description}:IProps)=> {


  return (
    <>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel style={{colorScheme: 'light dark' ,backgroundColor: '#242424',color: 'rgba(255, 255, 255, 0.87)'}} className="w-full max-w-md transform overflow-hidden rounded-lg p-6 text-left align-middle shadow-xl transition-all">
				  {title && <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-300"
                  >
                    {title}
					</Dialog.Title>}
          {description && <p className="text-sm text-gray-400 mt-3">{description}</p>}
                  <div className="mt-4">
                   {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default Modal;
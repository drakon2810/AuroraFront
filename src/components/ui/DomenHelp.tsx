import Godaddy1 from '../../../public/images/domen/Godaddy1.jpg'
import Godaddy2 from '../../../public/images/domen/Godaddy2.jpg'
import Godaddy3 from '../../../public/images/domen/Godaddy3.jpg'
import Godaddy4 from '../../../public/images/domen/Godaddy4.jpg'
import Godaddy5 from '../../../public/images/domen/Godaddy5.jpg'
import Hostinger1 from '../../../public/images/domen/Hostinger1.jpg'
import Hostinger2 from '../../../public/images/domen/Hostinger2.jpg'
import Hostinger3 from '../../../public/images/domen/Hostinger3.jpg'
import Hostinger4 from '../../../public/images/domen/Hostinger4.jpg'
import Hostinger5 from '../../../public/images/domen/Hostinger5.jpg'
import donadot1 from '../../../public/images/domen/donadot1.jpg'
import donadot2 from '../../../public/images/domen/donadot2.jpg'
import donadot3 from '../../../public/images/domen/donadot3.jpg'
import donadot4 from '../../../public/images/domen/donadot4.jpg'
import namechaper1 from '../../../public/images/domen/namechaper1.jpg'
import namechaper2 from '../../../public/images/domen/namechaper2.jpg'
import namechaper3 from '../../../public/images/domen/namechaper3.jpg'
import { useState } from 'react'

export const FullscreenModalDomen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [btn, setBtn] = useState('Dynadot')

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleToggle = (value: typeof btn) => {
    setBtn(value)
  }

  return (
    <div className='relative'>
      <button
        onClick={toggleModal}
        className='relative inline-block rounded-lg text-blue-700 transition-colors duration-300 hover:text-blue-600 focus:outline-none'
      >
        <span className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'>
          Help
        </span>
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4'
          onClick={toggleModal}
        >
          <div
            className='relative h-full max-h-full w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className='absolute right-4 top-4 text-2xl font-bold text-gray-500 hover:text-red-500 focus:outline-none'
            >
              &times;
            </button>

            <div>
              <h3 className='mb-4 text-xl font-semibold'>
                How to add a custom domain
              </h3>
              <p className='text-sm font-normal text-gray-600'>
                First, you need to purchase a domain from a specific domain
                registrar.
              </p>
              <p className='text-sm font-normal text-gray-600'>
                We prefer
                <span className='text-blue-700'>
                  <a href='http://www.dynadot.com/?s9W7Q7UCO8Rb8r'> Dynadot.</a>
                </span>
              </p>

              <div className='mt-4 flex w-full justify-center'>
                <div className='flex w-full max-w-[500px] items-center justify-between rounded-md bg-gray-200 p-1'>
                  {['Dynadot', 'Namecheap', 'Godaddy', 'Hostinger'].map(
                    (name) => (
                      <button
                        key={name}
                        onClick={() => handleToggle(name)}
                        className={`flex-1 rounded-md px-6 py-1.5 text-sm font-semibold transition-all ${
                          btn === name
                            ? 'bg-white text-black shadow'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {name}
                      </button>
                    )
                  )}
                </div>
              </div>
              {btn === 'Dynadot' && (
                <div>
                  <p className='mt-2 font-semibold'>
                    1. Go to{' '}
                    <span className='text-blue-700'>
                      <a href='http://www.dynadot.com/?s9W7Q7UCO8Rb8r'>
                        Dynadot{' '}
                      </a>
                    </span>
                    and select the domain you want to configure.
                  </p>
                  <img
                    src={donadot1}
                    alt='donadot step 1'
                    className='my-2 pl-4'
                  />
                  <p className='font-semibold'>
                    2.Navigate to the DNS Settings section and click the arrow
                    icon.
                  </p>
                  <img
                    src={donadot2}
                    alt='donadot step 1'
                    className='my-2 pl-4'
                  />
                  <p className='font-semibold'>
                    3. From the dropdown menu, choose "Name Servers".
                  </p>
                  <img
                    src={donadot3}
                    alt='donadot step 1'
                    className='my-2 pl-4'
                  />
                  <p className='font-semibold'>
                    4. Choose the option to enter new or existing Name Servers:
                  </p>
                  <p className='ml-4 mt-1 text-sm font-normal text-gray-600'>
                    1. Input the Name Servers provided to you after setting up
                    your site and custom domain.
                  </p>
                  <p className='ml-4 text-sm font-normal text-gray-600'>
                    2. Click the "Save Name Servers" button to apply the
                    changes.
                  </p>
                  <img
                    src={donadot4}
                    alt='donadot step 1'
                    className='my-2 pl-4'
                  />
                  <p className='font-semibold'>
                    5. All set! Now, you may need to wait for up to 24 hours for
                    the changes to take full effect. However, DNS updates
                    usually propagate within 1–2 hours, depending on your domain
                    registrar or internet provider.
                  </p>
                </div>
              )}
            </div>
            {btn === 'Namecheap' && (
              <div>
                <p className='mt-2 font-semibold'>
                  1. Access your{' '}
                  <span className='text-blue-700'>
                    <a href='https://www.namecheap.com/'>Namecheap </a>
                  </span>
                  Dashboard, find the domain you'd like to set up, expand the
                  dropdown, and click on "Manage".
                </p>
                <img
                  src={namechaper1}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  2. In the Nameservers section, select Custom DNS.
                </p>
                <img
                  src={namechaper2}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  3. Input the Name Servers provided after setting up your site
                  and custom domain, then click Save.
                </p>
                <img
                  src={namechaper3}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  4. That’s it! Now you’ll need to wait for the DNS changes to
                  propagate. This process can take up to 24 hours, but in most
                  cases, it completes within 1–2 hours based on your registrar
                  or ISP.
                </p>
              </div>
            )}
            {btn === 'Godaddy' && (
              <div>
                <p className='mt-2 font-semibold'>
                  1. Go to{' '}
                  <span className='text-blue-700'>
                    <a href='https://www.godaddy.com/'>Godaddy </a>
                  </span>
                  and on the Products page, navigate to the desired domain and
                  click the DNS button.
                </p>
                <img
                  src={Godaddy1}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>2. Select Nameservers tab.</p>
                <img
                  src={Godaddy2}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  3. Tap on "Change Nameservers" to make changes.
                </p>
                <img
                  src={Godaddy5}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  4. Select the I'll use my own nameservers option.
                </p>
                <p className='ml-4 mt-1 text-sm font-normal text-gray-600'>
                  1. Enter the Name Servers you received after creating the site
                  and setting up the custom domain.
                </p>
                <p className='ml-4 text-sm font-normal text-gray-600'>
                  2. Click the Save button.
                </p>
                <img
                  src={Godaddy3}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>5. Click the Continue button.</p>
                <img
                  src={Godaddy4}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  6. Finished! DNS updates can take up to 24 hours, but they
                  usually apply within 1–2 hours based on your registrar or ISP.
                </p>
              </div>
            )}
            {btn === 'Hostinger' && (
              <div>
                <p className='mt-2 font-semibold'>
                  1. Go to{' '}
                  <span className='text-blue-700'>
                    <a href='https://hostinger.com/?REFERRALCODE=1Z5DEVBARQAQ'>
                      Hostinger{' '}
                    </a>
                  </span>
                  and on the page with your domains, select the desired one and
                  click the Manage button.
                </p>
                <img
                  src={Hostinger1}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  2. On the domain page in the DNS/Nameservers section, click
                  the Edit button.
                </p>
                <img
                  src={Hostinger2}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  3. Click the Change Nameservers button.
                </p>
                <img
                  src={Hostinger3}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  4. Choose the "Change Nameservers" option.
                </p>
                <p className='ml-4 mt-1 text-sm font-normal text-gray-600'>
                  1. Enter the Name Servers provided after you created your site
                  and set up the custom domain.
                </p>
                <p className='ml-4 text-sm font-normal text-gray-600'>
                  2. Click the "Save" button to apply the changes.
                </p>
                <img
                  src={Hostinger4}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>5. Click the Change button.</p>
                <img
                  src={Hostinger5}
                  alt='donadot step 1'
                  className='my-2 pl-4'
                />
                <p className='font-semibold'>
                  6. All set! Now, you’ll need to wait up to 24 hours for the
                  DNS changes to take effect. However, updates usually propagate
                  within 1–2 hours, depending on your domain registrar or
                  internet service provider.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

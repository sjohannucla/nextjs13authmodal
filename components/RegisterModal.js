import { useRef } from'react'
import Modal from './Modal'

function RegisterModal({ show, onClose }) {
    const emailAddressRef = useRef()
    const passwordRef = useRef()

    // useEffect(() => {
    //     const getUserData = async () => {

    //     }
    //     getuserData()

    // }, []);

    //Handler function
    const registerHandler = async (e) => {
        const newUser = {
            emailAddress: emailAddressRef.current.value,
            password: passwordRef.current.value,
            createdAt: new Date()
        }
    }

  return (
    <Modal show={show} onClose={onClose}>
      <form onSubmit={registerHandler} className="flex flex-col gap-4">
      <div className="input-group">
             <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                ref={emailAddressRef}
                placeholder="Enter email address"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                ref={passwordRef}
                type="text"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="flex w-full items-center justify-start">
              <button
                type="submit"
                className="rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Submit
              </button>
    
              <section 
              className="m-4 rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                <button
                  onClick={() => {
                    setShowRegisterModal(true);
                  }}
                >
                  Register
                </button>
              </section>
            </div>
          </form>
        </Modal>
  );
}


export default RegisterModal;
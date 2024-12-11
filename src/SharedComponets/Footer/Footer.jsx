
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebookF, FaSquareYoutube, FaTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Billing & Health Insurance</a>
                    <a className="link link-hover">Diabetic Screening and Services</a>
                    <a className="link link-hover">Cancer Screening</a>
                    <a className="link link-hover">Neurology</a>
                    <a className="link link-hover">General Patients</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Our Specialists</h6>
                    <a className="link link-hover">Dr. Jaed Khan</a>
                    <a className="link link-hover">Dr. Shaju Khadem Umpa</a>
                    <a className="link link-hover">Dr.Hero Alam</a>
                    <a className="link link-hover">Dr. Antu Jalil</a>
                    <a className="link link-hover">Dr. Serious Kanchon</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email for regular health Tips</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-48" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            {/* ===== second section of footer */}
            <footer className="footer bg-base-300 text-neutral-content items-center p-4 rounded-b-xl">
                <aside className="grid-flow-col items-center">
                    <img src={logo} alt="pic" className='w-20 h-20 rounded-full' />
                    <p className='text-sm font-semibold text-blue-500 text-center'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link className='text-3xl text-blue-500' to={'https://x.com/'}><FaTwitter></FaTwitter></Link>
                    <Link className='text-3xl text-blue-500' to={'https://www.youtube.com/'}><FaSquareYoutube></FaSquareYoutube></Link>
                    <Link className='text-3xl text-blue-500' to={'https://www.facebook.com/'}><FaFacebookF></FaFacebookF></Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function ContactSection() {
    return (
        <section id="contact" className="p-12 bg-[#f2f0ed]">
            <h1 className="text-gray-500 text-center mb-3">GET IN TOUCH</h1>
            <h2 className="text-center font-bold text-3xl mb-5">Book Your Visit</h2>
            <div className="md:flex justify-between">
                <div>
                    <div className="flex gap-3 mb-2 place-items-baseline">
                        <span><FaLocationDot className="text-green-400"/></span>
                        <div>
                            <h3 className="text-xl font-medium">Location</h3>
                            <p className="text-gray-500">123 Bloom Avenue, Suite 200</p>
                            <p className="text-gray-500">New York, NY 10001</p>
                        </div>
                    </div>
                    <div className="flex gap-3 mb-2 place-items-baseline">
                        <span><FaPhone className="text-green-400"/></span>
                        <div>
                            <h3 className="text-xl font-medium">Phone</h3>
                            <p className="text-gray-500"><a href="tel:+2348153603155">0815-360-3155</a></p>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-2 place-items-baseline">
                        <span><FaClock className="text-green-400"/></span>
                        <div>
                            <h3 className="text-xl font-medium">Hours</h3>
                            <p className="text-gray-500">Mon - Fri: 9:00 AM - 8:00 PM</p>
                            <p className="text-gray-500">Sat - Sun: 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                <form action="https://formspree.io/f/mdaljdqa" className="sm:mt-8 flex flex-col md:w-[50%]">
                    <input type="text" name="name" placeholder="Your Name" className="pb-3 text-gray-500 border-b-2 border-gray-400 mb-3 outline-none" required/>
                    <input type="email" name="email" placeholder="Email Address" className="pb-3 text-gray-500 border-b-2 border-gray-400 mb-3 outline-none" required/>
                    <input type="tel" name="tel" placeholder="Phone Number" className="pb-3 text-gray-500 border-b-2 border-gray-400 mb-3 outline-none" required/>
                    <select name="service" id="service" className="pb-3 text-gray-500 border-b-2 border-gray-400 mb-3 outline-none" required>
                        <option value="" disabled selected hidden>Select a service</option>
                        <option value="Signature Facial">Signature Facial</option>
                        <option value="Hot Stone Massage">Hot Stone Massage</option>
                        <option value="Aromatherapy">Aromatherapy</option>
                        <option value="Body Scrub & Wrap">Body Scrub & Wrap</option>
                        <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                        <option value="Hair Styling">Hair Styling</option>
                    </select>
                    <textarea type="text" name="message" placeholder="Your Message" className="p-3 text-gray-500 border-b-2 border-gray-400 mb-3 outline-none" />
                    <button type="submit" className="bg-green-800 text-white w-50 py-2 transition hover:bg-green-900 cursor-pointer">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
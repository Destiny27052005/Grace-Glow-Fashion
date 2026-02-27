import { FaClock, FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

function ContactSection() {
    return (
        <section className="p-12 bg-[#f2f0ed]">
            <h1 className="text-center">GET IN TOUCH</h1>
            <h2 className="text-center font-bold text-3xl">Book Your Visit</h2>
            <div className="md:flex justify-between">
                <div>
                    <div className="flex gap-3">
                        <span>{FaLocationDot}</span>
                        <div>
                            <h3>Location</h3>
                            <p>123 Bloom Avenue, Suite 200</p>
                            <p>New York, NY 10001</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <span>{FaPhone}</span>
                        <div>
                            <h3>Phone</h3>
                            <p><a href="tel:+2348153603155">0815-360-3155</a></p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <span>{FaClock}</span>
                        <div>
                            <h3>Hours</h3>
                            <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                            <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Name" className="pb-3 text-gray-500 border-b-2 border-gray-400" />
                    <input type="email" name="email" placeholder="Email Address" className="pb-3 text-gray-500 border-b-2 border-gray-400" />
                    <input type="tel" name="tel" placeholder="Phone Number" className="pb-3 text-gray-500 border-b-2 border-gray-400" />
                    <select name="service" id="" placeholder="Select a service" className="pb-3 text-gray-500 border-b-2 border-gray-400">
                        <option value="Signature Facial">Signature Facial</option>
                        <option value="Hot Stone Massage">Hot Stone Massage</option>
                        <option value="Aromatherapy">Aromatherapy</option>
                        <option value="Body Scrub & Wrap">Body Scrub & Wrap</option>
                        <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                        <option value="Hair Styling">Hair Styling</option>
                    </select>
                    <textarea type="text" name="message" placeholder="Your Message" className="p-3 text-gray-500 border-b-2 border-gray-400" />
                    <button type="submit" className="bg-green-800 text-white w-50">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
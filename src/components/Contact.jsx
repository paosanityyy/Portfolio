import * as React from 'react';
import Form from 'react-bootstrap/Form';
import '../styles/Contact.css';

const Contact = () => {
    return(
        <section id="contact" className="p-6 mt-3 widescreen:section-min-height tallscreen:section-min-height"> 
            <h1 className="text-7xl font-bold text-center">Let's connect!</h1>
            <p className="text-lg text-center my-5 font-bold mb-10">I'm always open for a new opportunity to collaborate!</p>
            <Form className="max-w-5xl flex flex-col justify-center bg-gray-400 rounded-xl p-6 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-neutral-600 ">
                <Form.Group className="flex flex-col mb-3">
                    <Form.Label className='text-lg text-slate-400'>Name </Form.Label>
                    <Form.Control className='custom-input p-2 text-lg bg-neutral-700 border-2 border-neutral-600 rounded-lg' type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="w-full flex flex-col mb-3">
                    <Form.Label className=" text-lg text-slate-400">Email </Form.Label>
                    <Form.Control className='custom-input p-2 text-lg bg-neutral-700 border-2 border-neutral-600 rounded-lg' type="email" placeholder="Enter your email"/>
                </Form.Group>
                <Form.Group className="w-full flex flex-col mb-3">
                    <Form.Label className=" text-lg text-slate-400">Subject </Form.Label>
                    <Form.Control className='custom-input p-2 text-lg bg-neutral-700 border-2 border-neutral-600 rounded-lg' type="text" placeholder="Enter your subject"/>
                </Form.Group>
                <Form.Group className="w-full flex flex-col mb-5">
                    <Form.Label className=" text-lg text-slate-400">Message </Form.Label>
                    <Form.Control as="textarea" rows={5} className='custom-input p-2 text-lg bg-neutral-700 border-2 border-neutral-600 rounded-lg' placeholder="Enter your message"/>
                </Form.Group>
                

                <button class=" w-fit relative inline-flex items-center justify-center p-0.5 mx-auto overflow-hidden text-sm font-medium text-gray-200 rounded-lg group bg-gradient-to-br from-amber-600 via-amber-500 to-amber-300 group-hover:from-orange-400 group-hover:via-orange-500 group-hover:to-yellow-400 focus:ring-5 focus:outline-none focus:ring-red-100">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-neutral-700 rounded-md group-hover:bg-opacity-0">
                        Submit
                    </span>
                </button>
            </Form>
        </section>
    )
}

export default Contact;
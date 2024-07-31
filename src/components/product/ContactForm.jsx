import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData();
        formData.append("Nombres", name);
        formData.append("Apellidos", lastName);
        formData.append("Email", email);
        formData.append("Telefono", phone);
        formData.append("Mensaje", message);

        fetch(
            "https://script.google.com/macros/s/AKfycbzLnH4DOyb69o2Y4CzASQQXvkfYaVaL5D_O9a5elg0L-bydXdhoGWs1tDaOfjWDfP0/exec",
            {
                method: "POST",
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });

        alert("Mensaje enviado con éxito!");

        setName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-xl font-bold">Información de Contacto</h2>
                    <hr className="border-border" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium mb-1">
                                Nombres
                            </label>
                            <input
                                type="text"
                                id="Nombres"
                                className="shadow-sm -md px-3 py-2 text-black focus:outline-none focus:ring-primary focus:border-border block w-full bg-white"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-sm font-medium mb-1">
                                Apellidos
                            </label>
                            <input
                                type="text"
                                id="Apellidos"
                                className="shadow-sm -md px-3 py-2 focus:outline-none focus:ring-primary focus:border-border block text-black w-full bg-white"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            className="shadow-sm -md px-3 py-2 focus:outline-none focus:ring-primary focus:border-border block text-black w-full bg-white"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm font-medium mb-1">
                            Telefono
                        </label>
                        <input
                            type="number"
                            id="Telefono"
                            className="shadow-sm text-black -md px-3 py-2 focus:outline-none focus:ring-primary focus:border-border block w-full bg-white"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-medium mb-1">
                            Mensaje
                        </label>
                        <textarea
                            id="Mensaje"
                            rows="4"
                            className="shadow-sm -md text-black px-3 py-2 focus:outline-none focus:ring-primary focus:border-border block w-full bg-white"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center items-center px-4 py-2 text-base font-medium text-white bg-primary -md hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

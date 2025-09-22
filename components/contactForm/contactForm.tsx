"use client";

import { useState } from "react";
import { Container } from "../container";
import { PageTitle } from "../pageTitle";
import { Button } from "../button";
import { MapPoint, Phone, At } from "@/icons";
import { project } from "@/constants/project";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xldpreny", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nouveau contact de ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(initialFormData);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-6 mt-32 min-h-screen flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-black mb-4 font-ca-slalom">
              Message envoyé avec succès !
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-epilogue">
              Merci pour votre message. Nous vous contacterons dans les plus
              brefs délais.
            </p>
            <Button onClick={() => (window.location.href = "/")}>
              Retour à l&apos;accueil
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 mt-32">
      <Container>
        <div className="mx-auto">
          <PageTitle
            title="Contactez-nous"
            description="Vous avez une question, besoin d'un devis ou souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter, nous vous répondrons rapidement."
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                  Nos coordonnées
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPoint size="20px" color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 font-ca-slalom">
                        Adresse
                      </h4>
                      <p className="text-gray-600 font-epilogue">
                        {project.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size="20px" color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 font-ca-slalom">
                        Téléphone
                      </h4>
                      <a
                        href={`tel:${project.contact.phone}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors font-epilogue"
                      >
                        {project.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <At size="20px" color="#2563eb" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1 font-ca-slalom">
                        Email
                      </h4>
                      <a
                        href={`mailto:${project.contact.email}`}
                        className="text-blue-600 hover:text-blue-700 transition-colors font-epilogue"
                      >
                        {project.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4 font-ca-slalom">
                  Horaires d&apos;ouverture
                </h3>
                <div className="space-y-2 text-sm font-epilogue">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lundi - Vendredi</span>
                    <span className="text-black font-semibold">8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Samedi</span>
                    <span className="text-black font-semibold">8h - 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimanche</span>
                    <span className="text-red-600 font-semibold">Fermé</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-orange-100 rounded-lg">
                  <p className="text-sm text-orange-800 font-epilogue">
                    <strong>Urgences :</strong> Nous intervenons 24h/24 et 7j/7
                    pour les urgences de plomberie et d&apos;électricité.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                  Envoyez-nous un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="Votre prénom"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="plomberie">
                        Question sur la plomberie
                      </option>
                      <option value="electricite">
                        Question sur l&apos;électricité
                      </option>
                      <option value="chauffage">
                        Question sur le chauffage
                      </option>
                      <option value="energies-renouvelables">
                        Énergies renouvelables
                      </option>
                      <option value="urgence">Urgence</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue resize-vertical"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1"
                    >
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer le message"}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => (window.location.href = "/rendez-vous")}
                      className="flex-1"
                    >
                      Prendre rendez-vous
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 font-epilogue">
                    * Champs obligatoires. Vos données sont protégées et ne
                    seront utilisées que pour vous contacter.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

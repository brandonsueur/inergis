"use client";

import { useState } from "react";
import { Container } from "../container";
import { PageTitle } from "../pageTitle";
import { Button } from "../button";
import { activities } from "@/constants/activities";
import { Contact, Contact2, ContactIcon } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
  address: string;
  city: string;
  postalCode: string;
  message: string;
  preferredContact: string;
  preferredTime: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  urgency: "normal",
  address: "",
  city: "",
  postalCode: "",
  message: "",
  preferredContact: "phone",
  preferredTime: "morning",
};

export function AppointmentForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
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

    // Simulation d'envoi (remplacer par votre logique d'envoi)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-6 min-h-screen flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              Demande envoyée avec succès !
            </h1>
            <p className="text-gray-600 text-lg mb-8 font-epilogue">
              Merci pour votre demande. Nous vous contacterons dans les plus
              brefs délais pour convenir d&apos;un rendez-vous.
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
        <div className=" mx-auto">
          <PageTitle
            title="Prendre rendez-vous"
            description="Remplissez ce formulaire pour obtenir un devis gratuit ou prendre rendez-vous. Nous vous contacterons rapidement pour convenir d'un créneau qui vous convient."
          />

          <div className="grid lg:grid-cols-3 gap-12 mt-12">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <form
                action="https://formspree.io/f/mjkeqpoy"
                method="POST"
                className="space-y-6"
              >
                {/* Informations personnelles */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                    Informations personnelles
                  </h3>

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

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
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
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                  </div>
                </div>

                {/* Service demandé */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                    Service demandé
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Type de service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                      >
                        <option value="">Sélectionnez un service</option>
                        {activities.map((activity) => (
                          <option key={activity.id} value={activity.name}>
                            {activity.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="urgency"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Urgence
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                      >
                        <option value="normal">Normal (sous 48h)</option>
                        <option value="urgent">Urgent (sous 24h)</option>
                        <option value="emergency">Urgence (sous 4h)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Adresse d'intervention */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                    Adresse d&apos;intervention
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Adresse *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                        placeholder="123 rue de la République"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                        >
                          Ville *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                          placeholder="Paris"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="postalCode"
                          className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                        >
                          Code postal *
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9]{5}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                          placeholder="75001"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Préférences de contact */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                    Préférences de contact
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="preferredContact"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Moyen de contact préféré
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                      >
                        <option value="phone">Téléphone</option>
                        <option value="email">Email</option>
                        <option value="both">Les deux</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                      >
                        Créneau préféré
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue"
                      >
                        <option value="morning">Matin (8h-12h)</option>
                        <option value="afternoon">Après-midi (14h-18h)</option>
                        <option value="evening">Soirée (18h-20h)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-black mb-6 font-ca-slalom">
                    Description du problème
                  </h3>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-black mb-2 font-ca-slalom"
                    >
                      Décrivez votre besoin ou problème
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors font-epilogue resize-none"
                      placeholder="Décrivez en détail votre besoin, le problème rencontré, ou les travaux souhaités..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>
              </form>
            </div>

            {/* Informations complémentaires */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-black mb-4 font-ca-slalom">
                  Pourquoi nous choisir ?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Devis gratuit
                      </h4>
                      <p className="text-gray-600 text-sm font-epilogue">
                        Estimation transparente et sans engagement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Intervention rapide
                      </h4>
                      <p className="text-gray-600 text-sm font-epilogue">
                        Disponible 24h/24 pour les urgences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Experts qualifiés
                      </h4>
                      <p className="text-gray-600 text-sm font-epilogue">
                        Professionnels certifiés et expérimentés
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black font-ca-slalom">
                        Garantie qualité
                      </h4>
                      <p className="text-gray-600 text-sm font-epilogue">
                        Tous nos travaux sont garantis
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-black mb-4 font-ca-slalom">
                  Besoin d&apos;une intervention urgente ?
                </h3>
                <p className="text-gray-600 mb-4 font-epilogue">
                  Pour les urgences, contactez-nous directement par téléphone.
                </p>
                <Button variant="outline" className="w-full">
                  Appeler
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

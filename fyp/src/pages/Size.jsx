import React from 'react'
import { motion } from "framer-motion"
import divider from "../assets/divider.svg"

export function Size(props) {
    const [form, setForm] = React.useState({
        height: "",
        chest: "",
        shoulders: ""
    });
    const [showModal, setShowModal] = React.useState(false);

    // Load from localStorage on mount
    React.useEffect(() => {
        const saved = localStorage.getItem("sizeForm");
        if (saved) {
            setForm(JSON.parse(saved));
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleBook = () => {
        localStorage.setItem("sizeForm", JSON.stringify(form));
        setShowModal(true);
    };

    const handleEdit = () => setShowModal(false);

    const handleConfirm = () => {
        setShowModal(false);
        // You can add further logic here, e.g., navigation or API call
    };

    const navigate = props.navigate || (window.location ? (url) => window.location.assign(url) : () => {});

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20 flex flex-col items-center">
            <div className="max-w-4xl w-full mx-auto py-4 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:text-5xl md:font-extrabold eb-garamond-google font-semibold text-3xl md:px-0 px-4 text-[#C29A5C] dark:text-white mb-8 text-center leading-tight"
                >
                    Your Size, Your Style, Your Way
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 w-full flex flex-col items-center"
                >
                    <img src={divider} alt="" />
                    <div className="flex flex-col md:flex-row gap-6 w-full justify-center my-20 ">
                        {/* Height Dropdown */}
                        <div className="flex flex-col items-start w-full md:w-1/3">
                            <label
                                htmlFor="height"
                                className="mb-2 text-xl eb-garamond-google font-bold text-gray-900 dark:text-white"
                            >
                                Height (feet = cm)
                            </label>
                            <select
                                id="height"
                                value={form.height}
                                onChange={handleChange}
                                className="w-full px-4 py-2 font-bold eb-garamond-google rounded border border-[#C29A5C] bg-white text-[#1A1A1A] dark:bg-[#232323] dark:text-white dark:border-white focus:outline-none focus:ring-2 focus:ring-[#C29A5C] dark:focus:ring-white transition"
                                size={1}
                                style={{ maxHeight: '14rem', overflowY: 'scroll' }}
                            >
                                <option value="">Select Height</option>
                                <option value="152.4">5'0" = 152.4 cm</option>
                                <option value="154.9">5'1" = 154.9 cm</option>
                                <option value="157.5">5'2" = 157.5 cm</option>
                                <option value="160.0">5'3" = 160.0 cm</option>
                                <option value="162.6">5'4" = 162.6 cm</option>
                                <option value="165.1">5'5" = 165.1 cm</option>
                                <option value="167.6">5'6" = 167.6 cm</option>
                                <option value="170.2">5'7" = 170.2 cm</option>
                                <option value="172.7">5'8" = 172.7 cm</option>
                                <option value="175.3">5'9" = 175.3 cm</option>
                                <option value="177.8">5'10" = 177.8 cm</option>
                                <option value="180.3">5'11" = 180.3 cm</option>
                                <option value="182.9">6'0" = 182.9 cm</option>
                                <option value="185.4">6'1" = 185.4 cm</option>
                                <option value="188.0">6'2" = 188.0 cm</option>
                            </select>
                        </div>
                        <div className="flex flex-col items-start w-full md:w-1/3">
                            <label
                                htmlFor="chest"
                                className="mb-2 text-xl eb-garamond-google font-bold text-gray-900 dark:text-white"
                            >
                                Chest (inches = cm)
                            </label>
                            <select
                                id="chest"
                                value={form.chest}
                                onChange={handleChange}
                                className="w-full px-4 py-2 font-bold eb-garamond-google rounded border border-[#C29A5C] bg-white text-[#1A1A1A] dark:bg-[#232323] dark:text-white dark:border-white focus:outline-none focus:ring-2 focus:ring-[#C29A5C] dark:focus:ring-white transition"
                            >
                                <option value="">Select Chest</option>
                                <option value="34">34" = 86.4 cm</option>
                                <option value="36">36" = 91.4 cm</option>
                                <option value="38">38" = 96.5 cm</option>
                                <option value="40">40" = 101.6 cm</option>
                                <option value="42">42" = 106.7 cm</option>
                                <option value="44">44" = 111.8 cm</option>
                                <option value="45">45" = 114.3 cm</option>
                                <option value="46">46" = 116.8 cm</option>
                            </select>
                        </div>
                        {/* Shoulders Dropdown */}
                        <div className="flex flex-col items-start w-full md:w-1/3">
                            <label
                                htmlFor="shoulders"
                                className="mb-2 text-xl eb-garamond-google font-bold text-gray-900 dark:text-white"
                            >
                                Shoulders (inches = cm)
                            </label>
                            <select
                                id="shoulders"
                                value={form.shoulders}
                                onChange={handleChange}
                                className="w-full px-4 py-2 font-bold eb-garamond-google rounded border border-[#C29A5C] bg-white text-[#1A1A1A] dark:bg-[#232323] dark:text-white dark:border-white focus:outline-none focus:ring-2 focus:ring-[#C29A5C] dark:focus:ring-white transition"
                            >
                                <option value="">Select Shoulders</option>
                                <option value="16">16" = 40.6 cm</option>
                                <option value="17">17" = 43.2 cm</option>
                                <option value="18">18" = 45.7 cm</option>
                                <option value="19">19" = 48.3 cm</option>
                                <option value="20">20" = 50.8 cm</option>
                                <option value="21">21" = 53.3 cm</option>
                                <option value="22">22" = 55.9 cm</option>
                                <option value="23">23" = 58.4 cm</option>
                                <option value="24">24" = 61.0 cm</option>
                            </select>
                        </div>
                    </div>
                    <button
                        className="bg-transparent text-[#C29A5C] font-serif md:text-[16px] sm:text-xl border border-[#C29A5C] hover:bg-[#C29A5C] hover:text-white mt-52 px-8 py-3 hover:scale-105 transition-transform duration-200"
                        onClick={handleBook}
                    >
                        BOOK AN APPOINTMENT
                    </button>

                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white dark:bg-[#232323] rounded-xl shadow-2xl p-8 max-w-md w-full border border-[#C29A5C] dark:border-white"
                            >
                                <h2 className="text-2xl eb-garamond-google font-bold text-[#C29A5C] dark:text-white mb-4 text-center">
                                    Confirm Your Details
                                </h2>
                                <div className="space-y-2 text-lg text-gray-700 dark:text-gray-200">
                                    <div>
                                        <span className="font-semibold">Height:</span>{" "}
                                        {form.height
                                            ? `${form.height} cm`
                                            : <span className="italic text-gray-400">Not selected</span>}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Chest:</span>{" "}
                                        {form.chest
                                            ? `${form.chest} ${form.chest === "34" ? '(86.4 cm)' : form.chest === "36" ? '(91.4 cm)' : form.chest === "38" ? '(96.5 cm)' : form.chest === "40" ? '(101.6 cm)' : form.chest === "42" ? '(106.7 cm)' : form.chest === "44" ? '(111.8 cm)' : form.chest === "45" ? '(114.3 cm)' : form.chest === "46" ? '(116.8 cm)' : ''}`
                                            : <span className="italic text-gray-400">Not selected</span>}
                                    </div>
                                    <div>
                                        <span className="font-semibold">Shoulders:</span>{" "}
                                        {form.shoulders
                                            ? `${form.shoulders} ${form.shoulders === "16" ? '(40.6 cm)' : form.shoulders === "17" ? '(43.2 cm)' : form.shoulders === "18" ? '(45.7 cm)' : form.shoulders === "19" ? '(48.3 cm)' : form.shoulders === "20" ? '(50.8 cm)' : form.shoulders === "21" ? '(53.3 cm)' : form.shoulders === "22" ? '(55.9 cm)' : form.shoulders === "23" ? '(58.4 cm)' : form.shoulders === "24" ? '(61.0 cm)' : ''}`
                                            : <span className="italic text-gray-400">Not selected</span>}
                                    </div>
                                </div>
                                <div className="flex justify-between mt-8">
                                    <button
                                        className="px-6 py-2 rounded border border-[#C29A5C] text-[#C29A5C] dark:text-white dark:border-white hover:bg-[#C29A5C] hover:text-white dark:hover:bg-white dark:hover:text-[#232323] transition"
                                        onClick={handleEdit}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-6 py-2 rounded bg-[#C29A5C] text-white font-semibold hover:bg-[#a8833f] transition"
                                        onClick={() => {
                                            setShowModal(false);
                                            navigate("/contact");
                                        }}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

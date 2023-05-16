import { useState } from "react";

function Formulario() {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			[nombre, propietario, email, fecha, sintomas].includes(
				""
			)
		) {
			console.log("Hay un campo vacio");
			setError(true);
			return;
		}
		setError(false);
	};
	return (
		<div className="px-3 md:w-1/2 lg:w-2/5">
			<h2 className="text-3xl font-black text-center">
				Seguimiento Pacientes
			</h2>
			<p className="mt-5 mb-10 text-lg font-bold text-center">
				Añade pacientes y{" "}
				<span className="font-bold text-indigo-600">
					Administralos
				</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
			>
				{error && (
					<div className="p-3 mb-3 font-bold text-center text-white uppercase bg-red-600 rounded-md">
						<p>
							Todos los campos son
							Obligatorios
						</p>
					</div>
				)}

				<div className="mb-5">
					<label
						htmlFor="mascota"
						className="block font-bold text-gray-700 uppercase"
					>
						Nombre Mascota
					</label>
					<input
						id="mascota"
						type="text"
						placeholder="Nombre de la mascota"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-lg"
						value={nombre}
						onChange={(e) =>
							setNombre(
								e.target.value
							)
						}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="propietario"
						className="block font-bold text-gray-700 uppercase"
					>
						Propietario
					</label>
					<input
						id="propietario"
						type="text"
						placeholder="Nombre del propietario"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-lg"
						value={propietario}
						onChange={(e) =>
							setPropietario(
								e.target.value
							)
						}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block font-bold text-gray-700 uppercase"
					>
						Mail del Propietario
					</label>
					<input
						id="email"
						type="email"
						placeholder="email@email.com"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-lg"
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="alta"
						className="block font-bold text-gray-700 uppercase"
					>
						Alta
					</label>
					<input
						id="alta"
						type="date"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-lg"
						value={fecha}
						onChange={(e) =>
							setFecha(e.target.value)
						}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="sintomas"
						className="block font-bold text-gray-700 uppercase"
					>
						Sintomas
					</label>
					<textarea
						id="sintomas"
						className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-lg"
						placeholder="Describe los síntomas"
						value={sintomas}
						onChange={(e) =>
							setSintomas(
								e.target.value
							)
						}
					/>
				</div>
				<input
					type="submit"
					className="w-full p-3 font-bold text-white uppercase transition-all bg-indigo-600 cursor-pointer hover:bg-indigo-700"
					value="Agregar Paciente"
				/>
			</form>
		</div>
	);
}

export default Formulario;

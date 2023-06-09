import { useEffect, useState } from "react";
import Error from "./Error";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
		console.log(paciente);
	}, [paciente]);

	const generarId = () => {
		const random = Math.random().toString(36).slice(2);
		const fecha = Date.now().toString(36);
		return random + fecha;
	};
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
		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
		};

		if (paciente.id) {
			objetoPaciente.id = paciente.id;
			const pacientesActualizados = pacientes.map(
				(pacienteState) =>
					pacienteState.id === paciente.id
						? objetoPaciente
						: pacienteState
			);
			setPacientes(pacientesActualizados);
			setPaciente({});
		} else {
			objetoPaciente.id = generarId();
			setPacientes([...pacientes, objetoPaciente]);
		}

		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
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
					<Error>
						<p>
							Todos los campos son
							Obligatorios
						</p>
					</Error>
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
					value={
						paciente.id
							? "Editar Paciente"
							: "Agregar Paciente"
					}
				/>
			</form>
		</div>
	);
}

export default Formulario;

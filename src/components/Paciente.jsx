function Paciente({ nombre, propietario, fecha, email, sintomas }) {
	return (
		<div className="px-3 py-10 m-5 bg-white rounded-lg shadow-lg">
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Nombre:{" "}
				<span className="font-normal normal-case">
					{nombre}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Propietario:{" "}
				<span className="font-normal normal-case">
					{propietario}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Mail:{" "}
				<span className="font-normal normal-case">
					{email}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Fecha de Alta:{" "}
				<span className="font-normal normal-case">
					{fecha}
				</span>
			</p>
			<p className="mb-3 font-bold text-gray-700 uppercase">
				Sintomas:{" "}
				<span className="font-normal normal-case">
					{sintomas}
				</span>
			</p>
			<div className="flex gap-2 mt-10">
				<button
					className="px-10 py-2 text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700"
					type="button"
				>
					Editar
				</button>
				<button
					className="px-10 py-2 text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
					type="button"
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Paciente;

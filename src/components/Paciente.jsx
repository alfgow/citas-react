import Swal from "sweetalert2";
function Paciente({ paciente, setPaciente, eliminarPaciente }) {
	const { nombre, propietario, email, fecha, sintomas, id } = paciente;
	const handleEliminar = ({ nombre }) => {
		console.log(nombre);
		Swal.fire({
			title: `Quieres Eliminar al paciente: ${nombre}`,
			text: "Esta operación no puede revertirse",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Eliminar",
		}).then((result) => {
			if (result.isConfirmed) {
				eliminarPaciente(id);
				Swal.fire(
					"Eliminado!",
					`El paciente ${nombre} ha sido eliminado`,
					"success"
				);
			}
		});
	};
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
					onClick={() => {
						setPaciente({
							id,
							nombre,
							propietario,
							email,
							fecha,
							sintomas,
						});
					}}
				>
					Editar
				</button>
				<button
					className="px-10 py-2 text-white uppercase bg-red-600 rounded-lg hover:bg-red-700"
					type="button"
					onClick={() => {
						handleEliminar({ nombre });
					}}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}

export default Paciente;

import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
	console.log(pacientes);
	return (
		<div className="overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
			{pacientes && pacientes.length ? (
				<>
					<h2 className="text-3xl font-black text-center">
						Listado Pacientes
					</h2>
					<p className="mt-5 mb-10 text-xl font-bold text-center">
						Administra tus{" "}
						<span className="text-indigo-600">
							Pacientes y citas
						</span>
					</p>
					{pacientes.map((paciente) => (
						<Paciente
							key={paciente.id}
							paciente={paciente}
							setPaciente={
								setPaciente
							}
							eliminarPaciente={
								eliminarPaciente
							}
						/>
					))}
				</>
			) : (
				<>
					<h2 className="text-3xl font-black text-center">
						No hay Pacientes
					</h2>
					<p className="mt-5 mb-10 text-xl font-bold text-center">
						Comienza agregando pacientes{" "}
						<span className="text-indigo-600">
							para que aparezcan en el
							listado
						</span>
					</p>
				</>
			)}
		</div>
	);
}

export default ListadoPacientes;

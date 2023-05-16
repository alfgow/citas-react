import Paciente from "./Paciente";

function ListadoPacientes() {
	return (
		<div className="overflow-y-scroll md:h-screen md:w-1/2 lg:w-3/5">
			<h2 className="text-3xl font-black text-center">
				Listado Pacientes
			</h2>
			<p className="mt-5 mb-10 text-xl font-bold text-center">
				Administra tus{" "}
				<span className="text-indigo-600">
					Pacientes y citas
				</span>
			</p>
			<Paciente />
			<Paciente />
			<Paciente />
			<Paciente />
		</div>
	);
}

export default ListadoPacientes;

import Paciente from "./Paciente";

function ListadoPacientes({ pacientes }) {
	console.log(pacientes.length);
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
					{pacientes.map((paciente) => {
						const {
							nombre,
							propietario,
							email,
							fecha,
							sintomas,
							id,
						} = paciente;
						return (
							<Paciente
								key={id}
								nombre={nombre}
								propietario={
									propietario
								}
								email={email}
								fecha={fecha}
								sintomas={
									sintomas
								}
							/>
						);
					})}
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

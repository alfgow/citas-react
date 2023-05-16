function Header({ tomaValor }) {
	tomaValor("Hola");
	return (
		<>
			<h1 className="mx-auto text-5xl font-black text-center md:w-2/3">
				Seguimiento pacientes{" "}
				<span className="text-indigo-600">
					Veterinaria
				</span>
			</h1>
		</>
	);
}

export default Header;

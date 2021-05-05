const NoToken = () => {
  return (
	<section className="container mx-auto max-w-xl h-auto bg-red-200 rounded-lg space-y-4 content-center justify-center flex flex-nowrap flex-col p-8">
		<h1 className="text-red-800 text-3xl font-bold">Error</h1>

		<p className="text-base">No Token, please add token to .env file</p>
			
	</section>
  );
}

export default NoToken;
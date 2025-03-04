import { Button } from "../../../../shared/components/Button"

export default function Offers() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-evenly items-center bg-gradient-to-r from-primary-blue to-primary-purple m-4 p-11 rounded-md gap-8">
  <div className="flex md:flex-col flex-row text-white justify-center gap-4">
    <h1 className="md:text-4xl text-1xl font-bold">Ofertas Especiais</h1>
    <h2 className="md:text-xl text-xs">
      Até 50% de desconto em produtos selecionados
    </h2>
    <Button
      className="inline-block rounded-lg text-center w-[50%] py-2 md:text-lg text-xs"
      type="secondary"
    >
      Ver ofertas
    </Button>
  </div>
  <div className="w-full sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-[400px] flex justify-center items-center">
    <img
      className="rounded-lg object-cover w-full h-auto"
      src="https://placehold.co/500x400"
      alt=""
    />
  </div>
</div>

  )
}

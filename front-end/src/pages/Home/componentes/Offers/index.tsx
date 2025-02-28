import { Button } from "../../../../shared/components/Button"

export default function Offers() {
  return (
    <div className="flex justify-evenly items-center bg-gradient-to-r from-primary-blue to-primary-purple m-4 p-11 rounded-md gap-8">
      <div className="flex flex-col text-white justify-center gap-4">
        <h1 className="text-4xl font-bold">Ofertas Especiais</h1>
        <h2 className="text-xl">
          Até 50% de desconto em produtos selecionados
        </h2>
        <Button
          className="inline-block rounded-lg text-center w-[50%] py-2 text-lg "
          type="secondary"
        >
          Ver ofertas
        </Button>
      </div>
      <div className="w-96 h-[400px] flex justify-center items-center ">
        <img
          className="rounded-lg object-cover"
          src="https://placehold.co/500x400"
          alt=""
        />
      </div>
    </div>
  )
}

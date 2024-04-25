import { AlertCircleIcon, ArchiveIcon, CreditCardIcon, FilePenIcon } from "lucide-react"
import { Card } from "../../components/Card"
import { Table } from "../../components/Table"
import { columns, rows } from "../../constants"

export const Home: React.FC = () => {
    return (
        <div className="p-8 h-screen">
            <ul className="grid gap-4 grid-cols-4 mb-20">
                <li><Card icon={<CreditCardIcon size={20} color="#d8168a"/>} title="Assinaturas ativas" label="Clube NewTrips" value="300.00,00"/></li>
                <li><Card icon={<FilePenIcon size={20}  color="#d8168a"/>} title="Novos assinantes" label="Clube NewTrips" value="200/ dia"/></li>
                <li><Card icon={<AlertCircleIcon size={20}  color="#d8168a"/>} title="Assinaturas canceladas" label="Clube NewTrips" value="50/dia"/></li>
                <li><Card icon={<ArchiveIcon size={20} color="#d8168a" />} title="Contas desativadas" label="Clube NewTrips" value="1.000"/></li>
            </ul>
            <hr />
            <div className="mt-10">
                <h4 className="text-pink-500 font-semibold text-3xl">Assinaturas</h4>
                <label className="text-taupe-gray text-base">Lista de assinaturas ativas e inativas</label>
            </div>
            <Table columns={columns} data={rows}/>
        </div>
    )
}
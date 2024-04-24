import { Card } from "../../components/Card"

export const Home: React.FC = () => {
    return (
        <div className="p-8">
            <ul className="flex justify-between w-full">
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </ul>
        </div>
    )
}
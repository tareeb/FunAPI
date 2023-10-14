import Link from 'next/link'
import './PageHeader.css'

export default function PageHeader({title}){
    return(
        <div className="servicepage-header">
            <Link href="/">
                Back
            </Link>
            <h3>{title}</h3>
        </div>
    )
}
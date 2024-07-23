import { ProgressBar } from '../components/ProgressBar'

export default function DorothyExample() {
    return (
        <ProgressBar shape='linear' value={80} max={100} striped={true} />
    )
}

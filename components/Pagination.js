import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from

function Pagination() {

    const router = useRouter();

    return (
        <div>
            <button>Prev</button>
            <button>Next</button>
        </div>
    )
}

export default Pagination

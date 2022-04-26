import { Badge } from "react-bootstrap";
import { RECEIVESTATUS } from "../../../../Constants";

function ReceiveStatusBadge(status) {
    const color = ["secondary", "success", "info"];

    return (
        <Badge
            className="mt-1"
            bg={color[status]}
            style={{ width: "90px", fontSize: "14px" }}
        >
            {RECEIVESTATUS[status]}
        </Badge>
    );
}

export default ReceiveStatusBadge;

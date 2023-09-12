import { fonts } from "@/options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import useStore from "@/store";

const FontSelect = () => {
    const fontStyle = useStore((state) => state.fontStyle)
    return ( 
        <div>
            <label className="block mb-2  text-xs font-medium text-neutral-400">FontStyle</label>
            <Select value={fontStyle} onValueChange={(fontStyle) => useStore.setState({fontStyle})}>
                <SelectTrigger className="w-40">
                    <SelectValue placeholder="Select Theme" ></SelectValue>
                </SelectTrigger>
                <SelectContent className="dark" >
                    {Object.entries(fonts).map(([id, font]) => (
                        <SelectItem key={id} value={id} >
                            <span className=" capitalize">{font.name}</span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
     );
}
 
export default FontSelect;
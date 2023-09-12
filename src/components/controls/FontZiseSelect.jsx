import useStore from "@/store";
import { Input } from "../ui/input";

const FontSize = () => {
    const fontSize = useStore((state) => state.fontSize)
    return ( 
        <div>
            <label className="block mb-2  text-xs font-medium text-neutral-400">FontSize</label>
            <Input type="number"
                className="dark w-16 bg-transparent"
                min={8}
                value={fontSize}
                onChange={(e) => useStore.setState({ fontSize: Number(e.target.value) })}
                />
        </div>
     );
}
 
export default FontSize;
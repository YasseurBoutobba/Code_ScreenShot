import useStore from "@/store"
import { Switch } from "../ui/switch";

const BackgroundButton = () => {
    const showBackground = useStore((state)=> state.showBackground)
    
    return ( 
        <div>
            <label className="block mb-2  text-xs font-medium text-neutral-400">Background</label>
            <Switch className=" my-1.5" checked={showBackground} onCheckedChange={(showBackground)=> useStore.setState({showBackground})} />
        </div>        
     );
}
 
export default BackgroundButton;

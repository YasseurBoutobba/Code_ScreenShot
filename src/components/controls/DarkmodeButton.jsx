
import useStore from "@/store"
import { Switch } from "../ui/switch";

const DarkmodeButton = () => {
    const darkMode = useStore((state)=> state.darkMode)
    
    return ( 
        <div>
            <label className="block mb-2  text-xs font-medium text-neutral-400">DarkMode</label>
            <Switch className=" my-1.5" checked={darkMode} onCheckedChange={(darkMode)=> useStore.setState({darkMode})} />
        </div>        
     );
}
 
export default DarkmodeButton;
import { languages } from "@/options";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";
import useStore from "@/store";
import { MagicWandIcon } from "@radix-ui/react-icons"

const LanguageSelect = () => {
    const language = useStore((state) => state.language)
    const autoDetectLanguage = useStore((state) => state.autoDetectLanguage)
    const handelValueChange = (language) =>{
        if (language === "auto-detect") {
            useStore.setState({ autoDetectLanguage: true, language: "plaintext" })
          } else {
            useStore.setState({ autoDetectLanguage: false, language })
          }
    }
    return ( 
        <div>
            <label className="block mb-2  text-sm font-medium text-neutral-400">Language</label>
            <Select value={language} onValueChange={handelValueChange}>
                <SelectTrigger className="w-40">
                    {autoDetectLanguage && <MagicWandIcon className="mr-2" />}
                    <SelectValue placeholder="Select Language" ></SelectValue>
                </SelectTrigger>
                <SelectContent className="dark max-h-[500px]" >
                    <SelectItem value="auto-detect" >Auto Detect</SelectItem>
                    {Object.entries(languages).map(([lange, name]) => (
                        <SelectItem key={lange} value={lange} >
                            <span className=" capitalize">{name}</span>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
     );
}
 
export default LanguageSelect;
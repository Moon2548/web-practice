import { MainButton } from "@/components/main-button"

export default function Home() {

    return (
        <div>
            <div className="relative bg-yellow-200 m-4 h-[128px] p-4 rounded-[20px]">
                <div className="text-[16px] text-orange-600">สวัสดีวันจันทร์</div>
                <MainButton classname="absolute right-0 bottom-0 m-4" label="กิจกรรมของฉัน" />
            </div>
        </div>
    )
}
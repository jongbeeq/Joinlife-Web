import { AddIcon } from '../../icon/icon'

export default function CreatePostAndEventButton() {
    return (
        <div className="flex gap-[10%] w-full h-[5%] items-center border-b border-[0.5%] border-gray-300">
            <div className="flex flex-row justify-center items-center hover:text-gray-400 cursor-pointer gap-[5%]">
                <AddIcon />
                Create&nbsp;Post
            </div>
            <div className="flex flex-row justify-center items-center hover:text-gray-400 cursor-pointer gap-[5%]">
                <AddIcon />
                Create&nbsp;Event
            </div>
        </div>
    )
}

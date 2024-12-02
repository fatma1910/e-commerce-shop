import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SearchIcon size={26} cursor={"pointer"}/>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <form > 
            <input type="text" placeholder='Search Product' className='block w-full bg-gray-200 rounded-lg py-2 px-6 mt-4 outline-none
            ' />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBox
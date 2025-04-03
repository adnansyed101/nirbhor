"use client"

import { Checkbox } from "@/components/ui/checkbox"

const CheckboxDemo:React.FC<{keyword: string}> = ({keyword}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {keyword}
      </label>
    </div>
  )
}

export default CheckboxDemo;
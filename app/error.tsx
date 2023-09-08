'use client';
import Box from "@/components/Box";

const error = () => {
  return (
    <Box className='h-full flex items-center justify-center'>
        <div className="text-neutral-400">
            Something went wrong. Please try again later!
        </div>
    </Box>
  )
}

export default error
import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, textarea, checkoutHandler }) => {
    return (
        <VStack>
            <textarea name="Subscription for Unlimited questions" id="" cols="30" rows="10"></textarea>
            <Text>₹{amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
        </VStack>
    )
}

export default Card
'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({
 ...props
}: React.ComponentProps) {
 return 
}

function CollapsibleTrigger({
 ...props
}: React.ComponentProps) {
 return (
 <CollapsiblePrimitive.CollapsibleTrigger
 data-slot="collapsible-trigger"
 {...props}
 />
 )
}

function CollapsibleContent({
 ...props
}: React.ComponentProps) {
 return (
 <CollapsiblePrimitive.CollapsibleContent
 data-slot="collapsible-content"
 {...props}
 />
 )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

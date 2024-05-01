import * as Avatar from '@radix-ui/react-avatar';

export default function AvatarComponent(){
    return (
        <Avatar.Root>
            <Avatar.Image />
            <Avatar.Fallback />
        </Avatar.Root>
    )
} 
import { Button, VARIANTS } from './Button';

export default {
    title: 'Button',
    component: Button,
    // argTypes: {
    //     variant: {
    //         options: Object.values(VARIANTS),
    //         control: { type: 'radio' }
    //     }
    // }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
    disabled: false,
    variant: VARIANTS.PRIMARY
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Secondary button',
    disabled: false,
    variant: VARIANTS.SECONDARY
}
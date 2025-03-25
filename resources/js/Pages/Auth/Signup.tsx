import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import Logo from '@/Components/Logo/Logo';
import LoadingButton from '@/Components/Button/LoadingButton';
import TextInput from '@/Components/Form/TextInput';
import FieldGroup from '@/Components/Form/FieldGroup';
import { CheckboxInput } from '@/Components/Form/CheckboxInput';

export default function SignupPage() {
    const { data, setData, errors, post, processing } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        agree: false
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route('signup.register'));
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
            <Head title="Sign Up" />

            <div className="w-full max-w-md">
                <Link href="/">
                <Logo
                    className="block w-full max-w-xs mx-auto text-white fill-current"
                    height={50}
                />
                </Link>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
                >
                    <div className="px-10 py-12">
                        <h1 className="text-3xl font-bold text-center">Create an Account</h1>
                        <div className="w-24 mx-auto mt-6 border-b-2" />
                        <div className="grid gap-6"></div>
                        <FieldGroup label="Name" name="name" error={errors.name}>
                            <TextInput
                                name="name"
                                type="text"
                                error={errors.name}
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                            />
                        </FieldGroup>

                        <FieldGroup label="Email" name="email" error={errors.email}>
                            <TextInput
                                name="email"
                                type="email"
                                error={errors.email}
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                            />
                        </FieldGroup>

                        <FieldGroup
                            label="Password"
                            name="password"
                            error={errors.password}
                        >
                            <TextInput
                                type="password"
                                error={errors.password}
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                        </FieldGroup>

                        <FieldGroup
                            label="Confirm Password"
                            name="password_confirmation"
                            error={errors.password_confirmation}
                        >
                            <TextInput
                                type="password"
                                error={errors.password_confirmation}
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                            />
                        </FieldGroup>
                        <br/>
                        <FieldGroup >
                            <CheckboxInput
                                label={(<>I agree to the <Link href='/terms-of-service'>terms and conditions</Link></>)}
                                name="agree"
                                id="agree"
                                checked={data.agree}
                                onChange={e => setData('agree', e.target.checked)}
                            />
                        </FieldGroup>
                    </div>
                    {/* </div> */}
                    <div className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                        <Link className="hover:underline" tabIndex={-1} href="/login">
                            Already have an account?
                        </Link>
                        <LoadingButton
                            type="submit"
                            loading={processing}
                            className="btn-indigo"
                        >
                            Sign Up
                        </LoadingButton>
                    </div>
                </form>
            </div >
        </div >
    );
}

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { basicProfileValidationSchema } from "./schemas";
import { useTranslation } from "react-i18next";

const SampleForm = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            defaultValues: { username: "", email: "" },
            resolver: yupResolver(basicProfileValidationSchema)
        }
    );
    const onSubmit = (data: any) => console.log(data);

    console.log("errors", errors)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("username")} />
            {errors.username && <span>{t(errors!.username!.message!)}</span>}

            <input {...register("email", { required: true })} />
            {errors.email && <span>{t(errors!.email!.message!)}</span>}

            <input type="submit" />
        </form>
    );
}

export default SampleForm;
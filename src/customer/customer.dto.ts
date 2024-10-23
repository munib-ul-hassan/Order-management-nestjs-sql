import { IsEmail, IsCreditCard, MinLength,IsString ,IsNotEmpty} from 'class-validator';


export class CreateCustomerDto { 
    @IsNotEmpty()
    @IsEmail(undefined,{message:"Invalid email format"})
    email: string;

    
    @MinLength(16)
    @IsCreditCard({message:"Invalid card details"})    
    card: string;

    @IsString()
    name: string;

    @IsString()
    phone: string;
}
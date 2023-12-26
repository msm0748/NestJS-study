import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBoardDto {
  @MaxLength(20) // 최대 20글자 이하인지 확인
  @IsNotEmpty() // 빈 값이나 Null이 아닌지 확인
  @IsString()
  title: string;

  @IsString()
  @IsOptional() // 있을 수도 있고 없을 수도 있음
  desc: string;

  @IsString()
  @IsEmail() // 이메일 양식이 맞는지 확인
  writer: string;
}

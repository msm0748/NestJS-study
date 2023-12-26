import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  createBoard(boardData: CreateBoardDto) {
    return boardData;
  }
}

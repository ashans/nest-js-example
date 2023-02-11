import {
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';
import { ISession } from 'connect-typeorm';

@Entity({ name: 'sessions' })
export class SessionEntity implements ISession {
  @Index()
  @Column('bigint')
  expiredAt: number = Date.now();
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: number = null;
  @PrimaryColumn('varchar', { length: 255 })
  id = '';
  @Column('text')
  json = '';
}

"""making corrections

Revision ID: 65c9ecdb3665
Revises: 5002b6531359
Create Date: 2023-10-03 23:51:57.396004

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65c9ecdb3665'
down_revision = '5002b6531359'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contact', sa.String(), nullable=True))
        batch_op.drop_column('contacts')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contacts', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('contact')

    # ### end Alembic commands ###
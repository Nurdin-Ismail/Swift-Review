"""making corrections

Revision ID: fab2dc3e2152
Revises: 65c9ecdb3665
Create Date: 2023-10-03 23:52:17.956947

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fab2dc3e2152'
down_revision = '65c9ecdb3665'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contacts', sa.String(), nullable=True))
        batch_op.drop_column('contact')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('businesses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('contact', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('contacts')

    # ### end Alembic commands ###
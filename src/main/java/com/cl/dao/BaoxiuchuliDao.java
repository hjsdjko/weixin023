package com.cl.dao;

import com.cl.entity.BaoxiuchuliEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.BaoxiuchuliView;


/**
 * 报修处理
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface BaoxiuchuliDao extends BaseMapper<BaoxiuchuliEntity> {
	
	List<BaoxiuchuliView> selectListView(@Param("ew") Wrapper<BaoxiuchuliEntity> wrapper);

	List<BaoxiuchuliView> selectListView(Pagination page,@Param("ew") Wrapper<BaoxiuchuliEntity> wrapper);
	
	BaoxiuchuliView selectView(@Param("ew") Wrapper<BaoxiuchuliEntity> wrapper);
	

}
